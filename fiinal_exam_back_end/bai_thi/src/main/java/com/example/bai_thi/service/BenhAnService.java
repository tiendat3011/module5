package com.example.bai_thi.service;

import com.example.bai_thi.model.BenhAn;
import com.example.bai_thi.repository.BenhAnRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BenhAnService implements IBenhAnService {
    @Autowired
    private BenhAnRepository benhAnRepository;

    @Override
    public List<BenhAn> getAllBenhAn() {
        return null;
    }

    @Override
    public Optional<BenhAn> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void save(BenhAn benhAn) {

    }

    @Override
    public void update(BenhAn benhAn) {

    }
}
