package edu.greenriver.sdev.consuming_webapi.models;

import lombok.Data;

@Data
public class Category {
    private int id;
    private String name;
    private String description;
    private String origin;

    public Category(int id, String name, String description, String origin) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.origin = origin;
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

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }


}