package com.koyama.portfolio.model;

public class Project {
    private String name;
    private String description;
    private String tech;
    private String imageUrl; // thêm trường ảnh
    private String link;     // thêm trường link GitHub/demo

    public Project(String name, String description, String tech, String imageUrl, String link) {
        this.name = name;
        this.description = description;
        this.tech = tech;
        this.imageUrl = imageUrl;
        this.link = link;
    }

    public String getName() { return name; }
    public String getDescription() { return description; }
    public String getTech() { return tech; }
    public String getImageUrl() { return imageUrl; }
    public String getLink() { return link; }

    public void setName(String name) { this.name = name; }
    public void setDescription(String description) { this.description = description; }
    public void setTech(String tech) { this.tech = tech; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public void setLink(String link) { this.link = link; }

    @Override
    public String toString() {
        return "Project{name='" + name + "', description='" + description + "', tech='" + tech + 
               "', imageUrl='" + imageUrl + "', link='" + link + "'}";
    }
}
