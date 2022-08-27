package com.example.bai_thi.repository;

import com.example.bai_thi.model.BenhAn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Transactional
@Repository
public interface BenhAnRepository extends JpaRepository<BenhAn, Integer> {
}
