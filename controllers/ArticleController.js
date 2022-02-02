import models from "../models"; 

export default {

  	add: async(req, res) => {
    	try {
      		await models.Article.create(req.body);

			res.status(200).json({
				success: true,
				msg: "Article created"
			});

    	} catch (error) {
			console.log("[add]", error);
			res.status(500).json({
				success: false,
				msg: "Ocurrió un error",
			});
		}
	},

	query: async(req, res) => {

		const { _id } = req.query;

		try {

			const article = await models.Article.findOne({ _id }).populate("category", { name: 1 });

			if(!article) {
				res.status(404).json({
					success: false,
					msg: "Article not found"
				})
			}

			res.status(200).json({
				success: true,
				article
			})
			
		} catch (error) {
			console.log("[query]", error);
			res.status(500).json({
				success: false,
				msg: "Ocurrió un error",
			});	
		}
	},

	list: async(req, res) => {
		try {
			
			const name = req.query.name || "";
			
			const articles = await models.Article.find({ 'name': new RegExp(name, "i") })
			.populate("category", { name: 1 });

			res.status(200).json({
				success: true,
				articles
			})

		} catch (error) {
			console.log("[list]", error);
			res.status(500).json({
				success: false,
				msg: "Ocurrió un error",
			});	
		}
	},

	update: async(req, res) => {

		const { _id } = req.body;

		try {

			await models.Article.findByIdAndUpdate( _id, req.body, { new: true });

			res.status(200).json({
				success: true,
				msg: "Article updated"
			});
			
		} catch (error) {
			console.log("[update]", error);
			res.status(500).json({
				success: false,
				msg: "Ocurrió un error",
			});	
		}
	},

	remove: async(req, res) => {

		const { _id } = req.body;

		try {

			await models.Article.findByIdAndDelete({ _id });

			res.status(200).json({
				success: true,
				msg: "Article deleted"
			});
			
		} catch (error) {
			console.log("[remove]", error);
			res.status(500).json({
				success: false,
				msg: "Ocurrió un error",
			});	
		}
	},

	changeStatus: async(req, res) => {

		const { _id, status } = req.body;

		try {

			await models.Article.findByIdAndUpdate(_id, { status }, { new: true });

			res.status(200).json({
				success: 200,
				status,
				msg: "Status update",
			})
			
		} catch (error) {
			console.log("[changeStatus]", error);
			res.status(500).json({
				success: false,
				msg: "Ocurrió un error",
			});	
		}
	}
}
