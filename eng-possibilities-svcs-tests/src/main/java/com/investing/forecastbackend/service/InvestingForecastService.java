package com.investing.forecastbackend.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.investing.forecastbackend.model.ForecastRequest;
import com.investing.forecastbackend.model.ForecastResponse;
import com.investing.forecastbackend.model.InvestmentDetail;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.DoubleStream;

@Service
@Slf4j
@RequiredArgsConstructor
public class InvestingForecastService {

    public List<InvestmentDetail> getInvestmentOptions() throws IOException {
        // TODO read investment options from investment-details.json
        ObjectMapper objectMapper = new ObjectMapper();

        ArrayList read = (ArrayList) objectMapper.readValue(Paths
                .get("/home/fetenh/DeepPockets/eng-possibilities-svcs/src/main/resources/data/investment-details.json")
                .toFile(), Map.class).get("Investments");

        String str = objectMapper.writeValueAsString(read);
        return objectMapper.readValue(str, new TypeReference<List<InvestmentDetail>>() {
        });
    }


    public ForecastResponse getInvestmentOptions(final ForecastRequest request) throws IOException {
        List<InvestmentDetail> details = getInvestmentOptions();
        // TODO write algorithm to calculate investment forecast from request configuration
        List<Double> result = getForeCast(request.getRequest(), details);
        ForecastResponse response = new ForecastResponse();
        response.setResponse(result);
        return response;
    }

    public List<Double> getForeCast(Map<String, Double> userRequest, List<InvestmentDetail> details) {
        Map<Integer, Double> totalYearAmount = new HashMap<>();

        for (InvestmentDetail investmentDetail : details) {
            //user input for category i
            double userInvestmentPercentage = userRequest.get(investmentDetail.getCategory());
            double userInvestmentDollars = (userInvestmentPercentage / 100) * 10000;
            double[] historicalReturns = new double[10];
            for (int x = 0; x < 10; x++) {

                //historical interest data for category i in year x
                double historicalInterest = Double.valueOf(investmentDetail.getData().get(x));
                historicalReturns[x] = historicalInterest;

            }
                //get predicted returns based on moving average for past 10 years
                ArrayList<Double> predictedReturns = (ArrayList<Double>) movingAveragePrediction(historicalReturns);
                for(int i = 0; i < 10; i++){
                    double currentInterest = (predictedReturns.get(i) / 100) * userInvestmentDollars;
                    userInvestmentDollars = userInvestmentDollars + currentInterest;

                    Double currentYearTotal = totalYearAmount.getOrDefault(i, 0.0);
                    //add total amount for category i in year x in Map<Integer, Double> totalYearAmount
                    //continuously sum total for each investment i in year x
                    totalYearAmount.put(i, currentYearTotal + userInvestmentDollars);
                }
                

               

        }
        return new ArrayList<>(totalYearAmount.values());
    }


    public List<Double> movingAveragePrediction(double[] historicalReturns) {
        ArrayList<Double> predictedReturns = new ArrayList<Double>();
        int length = historicalReturns.length;
        double currentSum = DoubleStream.of(historicalReturns).sum();
        double currentAvg = currentSum/length;
        double lastPredicted = 0;
        //calculates moving average of past 10 years
        for(int i=0; i < length; i++){
            lastPredicted = currentAvg;
            predictedReturns.add(lastPredicted);
            currentSum = currentAvg * length;
            currentSum -= historicalReturns[i];
            currentSum += lastPredicted;
            currentAvg = currentSum/length;
        }

        return predictedReturns;
    }


}



