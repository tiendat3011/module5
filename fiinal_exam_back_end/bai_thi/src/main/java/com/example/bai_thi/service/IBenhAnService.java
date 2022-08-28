package com.example.bai_thi.service;

import com.example.bai_thi.model.BenhAn;

import java.util.List;
import java.util.Optional;


public interface IBenhAnService {
    List<BenhAn> getAllBenhAn();

    Optional<BenhAn> findById(Integer id);

    void save(BenhAn benhAn);

    void update(BenhAn benhAn);

}
