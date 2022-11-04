package com.app1.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app1.model.ExistingCustomer1;
import com.app1.model.NewCustomer;
import com.app1.model.SavingPlanData;
import com.app1.repository.SavingAdvisorRepo;

@Service
public class SavingAdvisorService 
{
	@Autowired
	private SavingAdvisorRepo repo;
	
	
	public ArrayList<SavingPlanData> getdata(double average) {
		ArrayList<SavingPlanData> mylist=new ArrayList<>();
		if(average>=0.1 && average<=0.49) {
			mylist.add(repo.findByplanname("Bronze"));
		}
		else if(average>=0.5 && average<=0.99) {
			mylist.add(repo.findByplanname("Bronze"));
			mylist.add(repo.findByplanname("Silver"));
		}
		else if(average>=1.0) {
			mylist.add(repo.findByplanname("Bronze"));
			mylist.add(repo.findByplanname("Silver"));
			mylist.add(repo.findByplanname("Gold"));
		}
		return mylist;
	}

	double points;
	double incomepoints;
	public double newCustomer(NewCustomer data) 
	{
		
			if (data.getAge() >= 20 && data.getAge() <= 30) 
			{
				points = 0.25;
			}
			if (data.getAge() >= 31 && data.getAge() <= 40) 
			{
				points = 0.50;
			} else if (data.getAge() >= 41 && data.getAge() <= 50) 
			{
				points = 0.75;
			} else if (data.getAge() > 50) 
			{
				points = 1;
			}

			if (data.getIncome() < 20000) 
			{
				incomepoints = 0.25;
			}
			else if(data.getIncome() >= 21000 && data.getIncome() <= 30000) 
			{
				incomepoints = 0.50;
			} 
			else if (data.getIncome() >= 31000 && data.getIncome() <= 40000) 
			{
				incomepoints = 0.75;
			} 
			else if (data.getIncome() > 40000) 
			{
				incomepoints = 1;
			}
			
			if (data.getAge() >= 20 && Math.log10(data.getIncome()) + 1 <= 10) 
			{
				double avg = (points + incomepoints) / 2;
		
				return avg;
			}
			return (Double) null;		
	}
	
	public double existingCustomer1(ExistingCustomer1 excustomer) {
		double amount=(excustomer.getLastMonthBalance()+excustomer.getLastBeforeMonthBalance())/2;
				return amount;
	}
	public ArrayList<SavingPlanData> getOldData(double existingavg) {
		ArrayList<SavingPlanData> mylist2=new ArrayList<>();
		if(existingavg<2000) 
		{
			mylist2.add(repo.findByplanname("Bronze"));
		}
		else if(existingavg>=2100 && existingavg<=4000) {
			mylist2.add(repo.findByplanname("Bronze"));
			mylist2.add(repo.findByplanname("Silver"));
		}
		else if(existingavg>=4100 && existingavg<=41000)
		{
			mylist2.add(repo.findByplanname("Bronze"));
			mylist2.add(repo.findByplanname("Silver"));
		}
		else if(existingavg>41000) {
			mylist2.add(repo.findByplanname("Bronze"));
			mylist2.add(repo.findByplanname("Silver"));
			mylist2.add(repo.findByplanname("Gold"));
		}
		return mylist2;
	}


}
