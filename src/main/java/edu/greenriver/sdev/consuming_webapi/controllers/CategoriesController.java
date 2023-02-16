package edu.greenriver.sdev.consuming_webapi.controllers;
import edu.greenriver.sdev.consuming_webapi.exceptions.GeneralException;
import edu.greenriver.sdev.consuming_webapi.exceptions.GeneralException;
import edu.greenriver.sdev.consuming_webapi.models.Category;
import edu.greenriver.sdev.consuming_webapi.services.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/categories")
@RestController
public class CategoriesController {

    private final CategoryService categoryService;

    public CategoriesController(CategoryService categoryService) {this.categoryService = categoryService;}

    @GetMapping(value = "/all")
    public List<Category> getCategories() {return categoryService.getAllCategories();}

    @GetMapping(value = "/seedData")
    public String addDemo(){
        categoryService.addDemoCategories();
        return "Success";
    }

    @GetMapping(value = "/{id}")
    public Category getCategory(@PathVariable("id") Integer id) throws GeneralException {
        return categoryService.findCategory(id);
    }

    @PostMapping("/new")
    public Category saveCategory(@RequestBody Category category){
        return categoryService.addCategory(category);
    }

    @PutMapping("/{id}")
    public Category updateCategory(@PathVariable Integer id, @RequestBody Category category)
            throws GeneralException{
        return categoryService.updateCategory(id, category);
    }
    @DeleteMapping("/{id}")
    public Category addDemoCategory(@PathVariable("id") Integer id) throws GeneralException {
        return categoryService.deleteCategory(id);
    }
}
