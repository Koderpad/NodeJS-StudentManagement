const logFeature = (req, res, next) => {
	console.log('this is the student list feature');
	next();
};

module.exports = {
	logFeature,
};
