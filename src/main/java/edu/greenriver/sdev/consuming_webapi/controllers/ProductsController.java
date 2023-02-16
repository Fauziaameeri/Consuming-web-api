package edu.greenriver.sdev.consuming_webapi.controllers;

import edu.greenriver.sdev.consuming_webapi.exceptions.GeneralException;
import edu.greenriver.sdev.consuming_webapi.exceptions.GeneralException;
import edu.greenriver.sdev.consuming_webapi.models.Product;
import edu.greenriver.sdev.consuming_webapi.services.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/products")
@RestController
public class ProductsController {
    private final ProductService productService;
    public ProductsController(ProductService productService) {
        this.productService = productService;}

    @GetMapping(value = "/all")
    public List<Product> getProducts(){return productService.getAllProducts();}

    @GetMapping(value = "/seedData")
    public String addDemo(){
        productService.addDemoProjects();
        return "Success";
    }

    @GetMapping(value = "/{id}")
    public Product getProducts(@PathVariable("id") Integer id) throws GeneralException {
        return productService.findProduct(id);
    }
    @PostMapping("/new")
    public Product saveProduct(@RequestBody Product product){
        return productService.addProduct(product);
    }
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Integer id, @RequestBody Product product)
        throws GeneralException{
        return productService.updateProduct(id, product);
    }
    @DeleteMapping("/{id}")
    public Product deleteProduct(@PathVariable("id") Integer id) throws GeneralException {
        return productService.deleteProduct(id);
    }
}
