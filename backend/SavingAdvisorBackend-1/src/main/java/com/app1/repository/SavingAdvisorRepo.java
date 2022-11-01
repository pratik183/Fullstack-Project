package com.app1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app1.model.SavingPlanData;

@Repository
public interface SavingAdvisorRepo extends JpaRepository<SavingPlanData, Integer>{

	SavingPlanData findByplanname(String string);

}

