package com.example.app.controller.admin.ProductController;

import com.example.app.entity.MauSac;
import com.example.app.service.productService.MauSacService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/color/")
public class MauSacController {
    @Autowired
    private MauSacService mauSacService;
    @GetMapping
    public ResponseEntity<List<MauSac>> getAll() {

        List<MauSac> result = this.mauSacService.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("{id}")
    public ResponseEntity<MauSac> getMauSacById(@PathVariable Integer id) {
        Optional<MauSac> MauSac = mauSacService.getStaffById(id);
        return MauSac.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("post")
    public ResponseEntity<MauSac> createMauSac(@RequestBody MauSac request) {
        MauSac response = mauSacService.createStaff(request);
        return ResponseEntity.status(201).body(response);
    }
    @PutMapping("{id}")
    public ResponseEntity<MauSac> updateMauSac(@PathVariable Integer id, @RequestBody MauSac request) {
        MauSac response = mauSacService.updateStaff(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<MauSac> deleteMauSac(@PathVariable Integer id) {
        mauSacService.deleteStaff(id);
        return ResponseEntity.noContent().build();
    }
}
