const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;
  const totalValue = Number(numWeeks) * Number(weeklyRevenue);
  if (numWeeks && weeklyRevenue && !isNaN(totalValue) && totalValue > 999999) {
    next();
  } else {
    res.status(400).send();
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
