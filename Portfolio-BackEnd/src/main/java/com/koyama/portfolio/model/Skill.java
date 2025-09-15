package com.koyama.portfolio.model;

public class Skill {
    private String name;
    private String description;
    private String imageUrl; // thêm trường ảnh

    public Skill(String name, String description, String imageUrl) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl; // khởi tạo ảnh
    }

    public String getName() { return name; }
    public String getDescription() { return description; }
    public String getImageUrl() { return imageUrl; } // getter cho ảnh

    public void setName(String name) { this.name = name; }
    public void setDescription(String description) { this.description = description; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; } // setter cho ảnh
}
