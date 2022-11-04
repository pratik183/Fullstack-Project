package com.app1.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExistingCustomer1 {

	private Long lastMonthBalance;
	
	private Long lastBeforeMonthBalance;
}
