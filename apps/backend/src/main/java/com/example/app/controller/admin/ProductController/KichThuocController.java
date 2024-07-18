package com.example.app.controller.admin.ProductController;

import com.example.app.entity.KichThuoc;
import com.example.app.service.productService.KichThuocService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@Controller
@RequestMapping("/api/size/")
public class KichThuocController {
    @Autowired
    private KichThuocService kichThuocService;

    @GetMapping
    public ResponseEntity<List<KichThuoc>> getAll() {

        List<KichThuoc> result = this.kichThuocService.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("{id}")
    public ResponseEntity<KichThuoc> getById(@PathVariable Integer id) {
        Optional<KichThuoc> KichThuoc = kichThuocService.getStaffById(id);
        return KichThuoc.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("post")
    public ResponseEntity<KichThuoc> create(@RequestBody KichThuoc request) {
        KichThuoc response = kichThuocService.createStaff(request);
        return ResponseEntity.status(201).body(response);
    }

    @PutMapping("{id}")
    public ResponseEntity<KichThuoc> update(@PathVariable Integer id, @RequestBody KichThuoc request) {
        KichThuoc response = kichThuocService.updateStaff(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<KichThuoc> delete(@PathVariable Integer id) {
        kichThuocService.deleteStaff(id);
        return ResponseEntity.noContent().build();
    }
}