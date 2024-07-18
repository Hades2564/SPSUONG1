package com.example.app.controller.admin.ProductController;

import com.example.app.entity.ChatLieu;
import com.example.app.service.productService.ChatLieuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/CL/")
public class ChatLieuController {
    @Autowired
    private ChatLieuService Service;

    @GetMapping
    public ResponseEntity<List<ChatLieu>> getAll() {

        List<ChatLieu> result = this.Service.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("{id}")
    public ResponseEntity<ChatLieu> getById(@PathVariable Integer id) {
        Optional<ChatLieu> KichThuoc = Service.getById(id);
        return KichThuoc.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("post")
    public ResponseEntity<ChatLieu> create(@RequestBody ChatLieu request) {
        ChatLieu response = Service.create(request);
        return ResponseEntity.status(201).body(response);
    }

    @PutMapping("{id}")
    public ResponseEntity<ChatLieu> update(@PathVariable Integer id, @RequestBody ChatLieu request) {
        ChatLieu response = Service.update(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<ChatLieu> delete(@PathVariable Integer id) {
        Service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
