-- 코드를 입력하세요
SELECT ch.CAR_ID
from CAR_RENTAL_COMPANY_RENTAL_HISTORY ch 
inner join CAR_RENTAL_COMPANY_CAR cc on ch.CAR_ID = cc.CAR_ID
where 10 = month(ch.START_DATE) and cc.CAR_TYPE = '세단'
group by ch.CAR_ID
order by ch.CAR_ID desc