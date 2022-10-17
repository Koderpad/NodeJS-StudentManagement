const checkEmpty = (req, res, next) => {
	const { fullName, age, numberClass } = req.body;
	if (fullName && age && numberClass) {
		next();
	} else {
		res.status(500).send('Not empty fullName, age, numberClass');
	}
};

const checkNumClass = (req, res, next) => {
	const { numberClass } = req.body;
	if (numberClass >= 1 && numberClass <= 12) {
		next();
	} else {
		res.status(500).send('number class must be between 1 and 12');
	}
};

module.exports = {
	checkEmpty,
	checkNumClass,
};
