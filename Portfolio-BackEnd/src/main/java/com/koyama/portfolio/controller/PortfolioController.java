package com.koyama.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

import com.koyama.portfolio.model.*;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    @GetMapping("/profile")
    public Map<String, String> getProfile() {
        return Map.of(
            "name", "Koyama Gin",
            "title", "BrSE / Java Developer",
            "summary", "3 năm kinh nghiệm với Java, Spring Boot, ReactJS và MySQL."
        );
    }

    @GetMapping("/skills")
    public List<Skill> getSkills() {
        return List.of(
            new Skill("Java", "Spring Boot, JPA, Hibernate"),
            new Skill("Frontend", "ReactJS, HTML, CSS, JS"),
            new Skill("Database", "MySQL, PostgreSQL")
        );
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return List.of(
            new Project("CRM System", "Ứng dụng quản lý khách hàng", "Spring Boot + ReactJS"),
            new Project("E-Commerce", "Website bán hàng trực tuyến", "FuelPHP + VueJS"),
            new Project("Portfolio", "Website cá nhân", "Spring Boot + ReactJS")
        );
    }
}