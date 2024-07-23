const bonusTime = (salary, bonus) => `€${bonus ? salary * 10 : salary}`;

console.log(bonusTime(10000, true));
