package edu.greenriver.sdev.consuming_webapi.models;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Product {
    private int id;
    private String name;
    private String description;

    private String submitted;
    private double price;

    public Product(){
        //TODO Auto-generated constructor stub
    }
    public Product(int id, String name, String description, double price, String submitted) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.submitted = submitted;
    }

    public Product(int id, String name, String description, double price) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getSubmitted() {
        return submitted;
    }

    public void setSubmitted(String submitted) {
        this.submitted = submitted;
    }


}


