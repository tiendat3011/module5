package com.example.bai_thi.repository;

import com.example.bai_thi.model.BenhNhan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Transactional
@Repository
public interface BenhNhanRepository extends JpaRepository<BenhNhan, Integer> {

}
