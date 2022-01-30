import models from "../models"; 

export default {

  	add: async(req, res) => {
    	try {
      		await models.Category.create(req.body);
			res.status(200).json({
				success: true,
				msg: "Category created"
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

			const category = await models.Category.findOne({ _id });

			if(!category) {
				res.status(404).json({
					success: false,
					msg: "Category not found"
				})
			}

			res.status(200).json({
				success: true,
				category
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
			
			const { name } = req.query;
			
			const categories = await models.Category.find({ 'name': new RegExp(name, "i") })

			res.status(200).json({
				success: true,
				categories
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

			await models.Category.findByIdAndUpdate( _id, req.body, { new: true });

			res.status(200).json({
				success: true,
				msg: "Category updated"
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

			await models.Category.findByIdAndDelete({ _id });

			res.status(200).json({
				success: true,
				msg: "Category deleted"
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

			await models.Category.findByIdAndUpdate(_id, { status }, { new: true });

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
