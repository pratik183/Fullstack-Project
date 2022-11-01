package com.app1.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="savingplandata")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SavingPlanData {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer id;
		
	@Column
	float savingpoint;
	
	@Column
	String planname;
	
	@Column
	Long Amount;
	
	@Column
	int Tenure;
	
	@Column
	String type;
}
