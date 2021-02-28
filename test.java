    public static void main(String[] args) {
        double[] returns = {1,2,3,4,5,6,7,8,9,10};
        System.out.println(movingAveragePrediction(returns));

    }



    public List<Double> movingAveragePrediction(double[] historicalReturns) {
        ArrayList<Double> predictedReturns = ArrayList<Double>();
        int length = historicalReturns.length;
        double currentSum = historicalReturns.sum();
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

