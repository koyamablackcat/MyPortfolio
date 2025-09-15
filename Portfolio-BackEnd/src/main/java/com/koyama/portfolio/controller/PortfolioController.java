package com.koyama.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Map;

import com.koyama.portfolio.model.*;

@CrossOrigin(origins = "http://localhost:5173") //local test
@RestController
@RequestMapping("/api")
public class PortfolioController {

    @GetMapping("/profile")
    public Map<String, String> getProfile() {
        return Map.of(
            "name", "Koyama Gin",
            "title", "BrSE / Java Developer",
            "summary", "Vị trí giao tiếp tiếng Nhật thường xuyên, với 3 năm kinh nghiệm FileMaker. Chuyên gia phát triển ứng dụng doanh nghiệp, tích hợp hệ thống và tối ưu backend.",
            "location", "TP. Hồ Chí Minh, Việt Nam",
            "email", "sondangvan1995@gmail.com",
            "phone", "+84 77 385 9046",
            "avatar", "http://localhost:8080/images/avatar.jpg", //local test
            // "linkedin", "https://linkedin.com/in/koyama",
            "github", "https://github.com/koyamablackcat"
        );
    }

    @GetMapping("/skills")
    public List<Skill> getSkills() {
        return List.of(
            new Skill("Java", "Spring Boot, JPA, Hibernate, Microservices, REST API", "https://example.com/images/java.png"),
            new Skill("Frontend", "ReactJS, HTML, CSS, JS, Material UI", "https://example.com/images/react.png"),
            new Skill("Database", "MySQL, PostgreSQL, MongoDB, Database Design", "https://example.com/images/database.png"),
            new Skill("DevOps", "Docker, Kubernetes, CI/CD, Jenkins", "https://example.com/images/devops.png")
        );
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return List.of(
            new Project(
                "CRM System",
                "Ứng dụng quản lý khách hàng với chức năng quản lý thông tin khách hàng, báo cáo doanh số, phân quyền người dùng.",
                "Spring Boot, ReactJS, MySQL, Docker",
                "https://example.com/images/crm.png",
                "https://github.com/koyama/crm-system"
            ),
            new Project(
                "E-Commerce",
                "Website bán hàng trực tuyến với thanh toán, giỏ hàng, quản lý sản phẩm và đơn hàng.",
                "FuelPHP, VueJS, MySQL",
                "https://example.com/images/ecommerce.png",
                "https://github.com/koyama/e-commerce"
            ),
            new Project(
                "Portfolio",
                "Website cá nhân giới thiệu profile, kỹ năng và các dự án đã thực hiện, tối ưu trải nghiệm người dùng.",
                "Spring Boot, ReactJS, Material UI",
                "https://github.com/koyamablackcat/MyPortfolio/blob/main/Portfolio-BackEnd/src/main/resources/static/images/avatar.jpg",
                "https://github.com/koyamablackcat/portfolio"
            )
        );
    }
}
