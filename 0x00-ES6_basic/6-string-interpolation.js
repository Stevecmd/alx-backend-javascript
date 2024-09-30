export default function getSanFranciscoDescription() {
  const year1 = 2017;
  const incomeRank = 'seventh-highest';
  const income = 119868;
  const year2 = 2015;
  const gdp = 154.2;
  const gdpPerCapita = 178479;

  return `As of ${year1}, it was the ${incomeRank} income county in the United States,`
    + `with a per capita personal income of $${income.toLocaleString()}. As of ${year2},`
    + `San Francisco proper had a GDP of $${gdp} billion,`
    + `and a GDP per capita of $${gdpPerCapita.toLocaleString()}.`;
}
