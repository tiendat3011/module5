package com.example.bai_thi.service;

import com.example.bai_thi.model.BenhAn;
import com.example.bai_thi.repository.BenhAnRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BenhAnService implements IBenhAnService {
    @Autowired
    private BenhAnRepository benhAnRepository;
    @Override
    public List<BenhAn> getAll() {
        return benhAnRepository.findAll();
    }
}
