package com.example.app.controller.admin.ProductController;

import com.example.app.entity.NuocSanXuat;
import com.example.app.service.productService.NuocSanXuatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/NSX/")
public class NuocSanXuatController {
    @Autowired
    private NuocSanXuatService Service;

    @GetMapping
    public ResponseEntity<List<NuocSanXuat>> getAll() {

        List<NuocSanXuat> result = this.Service.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("{id}")
    public ResponseEntity<NuocSanXuat> getById(@PathVariable Integer id) {
        Optional<NuocSanXuat> KichThuoc = Service.getById(id);
        return KichThuoc.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("post")
    public ResponseEntity<NuocSanXuat> create(@RequestBody NuocSanXuat request) {
        NuocSanXuat response = Service.create(request);
        return ResponseEntity.status(201).body(response);
    }

    @PutMapping("{id}")
    public ResponseEntity<NuocSanXuat> update(@PathVariable Integer id, @RequestBody NuocSanXuat request) {
        NuocSanXuat response = Service.update(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<NuocSanXuat> delete(@PathVariable Integer id) {
        Service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
