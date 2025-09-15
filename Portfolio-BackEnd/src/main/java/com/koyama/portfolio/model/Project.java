package com.koyama.portfolio.model;

/*
*/

public class Project {
    private String name;
    private String description;
    private String tech; // thêm trường tech theo controller

    // Constructor đầy đủ (tương đương @AllArgsConstructor)
    public Project(String name, String description, String tech) {
        this.name = name;
        this.description = description;
        this.tech = tech;
    }

    // Getters (tương đương phần của @Data)
    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getTech() {
        return tech;
    }

    // Setters (tương đương phần của @Data)
    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setTech(String tech) {
        this.tech = tech;
    }

    // toString() tiện debug (tùy chọn)
    @Override
    public String toString() {
        return "Project{name='" + name + "', description='" + description + "', tech='" + tech + "'}";
    }
}
