function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function(drivers) {
  return drivers.slice().sort(function(driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  });
};

const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
};
