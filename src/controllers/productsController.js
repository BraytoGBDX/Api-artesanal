import candysDAO from "../dao/candysDao.js";

const C = console.log.bind(console.log)


export const getAllCandys=(req,res)=>{
    candysDAO.getAll()
    .then(candy=>{
        if(candy!=null){
            res.render('../src/views/index.ejs',{candy})
        }else{
            res.json({
                status:"Products not foundo"
            })
        }
    })
    .catch(err=>console.error(err))
};

export const getOneProduct = async (req, res) => {
    console.log(req.params)
    try {
        const candy = await candysDAO.getOne(req.params.candybc);

        if (candy) {
            res.render('../src/views/update', { candy });
        } else {
            res.json({
                status: "Product not found"
            });
        }
    } catch (err) {
        res.status(500).json({
            status: "Server unavailable",
            error: err.message
        });
    }
};


export const insertCandy = async (req, res) => {
    try {
        const candys = await candysDAO.insertcandy(req.body);

        if (candys != null) {
            // Redirige a la raíz
            res.redirect('/');
        }
    } catch (err) {
        res.status(500).json({
            status: "Server unavailable",
            error: err.message
            
        })
        console.log(err);
    }
};


export const updateProduct=(req,res)=>{
    candysDAO.updatecandys(req.params.candybc,req.body)
    .then(result=>{
        if(result){
            res.redirect('/')
        }
    })
    .catch(err=>{
        res.json({
            status:"Server unavailable"
        })
    })
}

export const deleteProduct=(req,res)=>{
    candysDAO.deletecandy(req.params.candybc)
    .then(result=>{
        if(result){
            res.redirect('/')//redirecciona a la raiz

        }
    })
    .catch(err=>{
        res.json({
            status:"Server unavailable"
        })
    })
}



export const formInsertCandy=(req,res)=>{
    res.render('../src/views/insertCandy.ejs')
}


import cartDAO from "../dao/cartDao.js";

export const getAllCart=(req,res)=>{
    cartDAO.getAll()
    .then(cart=>{
        if(cart!=null){
            res.render('../src/views/viewCart.ejs',{cart})
        }else{
            res.json({
                status:"Products not foundo"
            })
        }
    })
    .catch(err=>console.error(err))
};


export const addToCart = async (req, res) => {
    try {
        // Recupera la información del producto desde la base de datos o cualquier fuente necesaria
        const candyInfo = await candysDAO.getOne(req.params.candybc);

        // Llama a la función para insertar en el carrito
        const cart = await cartDAO.insertcandyCart({
            barcode: req.params.candybc,
            // Otros campos del producto que puedas necesitar
            // Puedes utilizar la información recuperada desde la base de datos aquí
            description: candyInfo.description,
            brand: candyInfo.brand,
            price: candyInfo.price,
            // Agrega otros campos según sea necesario
        });

        if (cart) {
            res.redirect('/');
        }
    } catch (err) {
        res.status(500).json({
            status: "Server unavailable",
            error: err.message
        });
        console.log(err);
    }
};

export const viewCart = async (req, res) => {
    try {
        // Recupera todos los elementos del carrito antes de renderizar la vista
        const cart = await cartDAO.getAll();

        res.render('../src/views/viewCart.ejs', { cart });
    } catch (err) {
        res.status(500).json({
            status: "Server unavailable",
            error: err.message
        });
        console.log(err);
    }
};



export const deleteProductCart = async (req, res) => {
    try {
        const result = await cartDAO.deletecandyCart(req.params.cartbc);

        if (result) {
            res.redirect('/');
        } else {
            res.json({
                status: "Product not found in cart"
            });
        }
    } catch (err) {
        res.status(500).json({
            status: "Server unavailable",
            error: err.message
        });
    }
};
