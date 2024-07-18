package com.example.app.controller.admin.ProductController;

import com.example.app.entity.LoaiHoaTIet;
import com.example.app.service.productService.LoaiHoaTietService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/LHT/")
public class LoaiHoaTietController {
    @Autowired
    private LoaiHoaTietService Service;

    @GetMapping
    public ResponseEntity<List<LoaiHoaTIet>> getAll() {

        List<LoaiHoaTIet> result = this.Service.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("{id}")
    public ResponseEntity<LoaiHoaTIet> getById(@PathVariable Integer id) {
        Optional<LoaiHoaTIet> KichThuoc = Service.getById(id);
        return KichThuoc.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("post")
    public ResponseEntity<LoaiHoaTIet> create(@RequestBody LoaiHoaTIet request) {
        LoaiHoaTIet response = Service.create(request);
        return ResponseEntity.status(201).body(response);
    }

    @PutMapping("{id}")
    public ResponseEntity<LoaiHoaTIet> update(@PathVariable Integer id, @RequestBody LoaiHoaTIet request) {
        LoaiHoaTIet response = Service.update(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<LoaiHoaTIet> delete(@PathVariable Integer id) {
        Service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
