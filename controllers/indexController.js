const messages = [
	{
	  text: "Hi there!",
	  user: "Amando",
	  added: new Date().toLocaleString()
	},
	{
	  text: "Hello World!",
	  user: "Charles",
	  added: new Date().toLocaleString()
	}
];

const getMessageBoard = (req, res) => {
    res.render("index", { messages });
};

const getNewMessage = (req, res) => {
    res.render('form');
};

const createNewMessage = (req, res) => {
    const { user, text } = req.body;
	messages.push({
		text: text, 
		user: user, 
		added: new Date().toLocaleString() 
    });
	res.redirect("/");
};

const getMessageDetails = (req, res) => {
	const message = messages[req.params.id];
	res.render('message', { message });
};

module.exports = { getMessageBoard, getNewMessage, createNewMessage, getMessageDetails };