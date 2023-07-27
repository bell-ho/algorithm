-- 코드를 입력하세요
# SELECT DATE_FORMAT(c.START_DATE,'%Y-%m') as MONTH,
# c.CAR_ID,
# count(*) as RECORDS
# from CAR_RENTAL_COMPANY_RENTAL_HISTORY c 
# where c.START_DATE between '2022-08-01 00:00:00' and '2022-10-31 23:59:59'
# group by c.CAR_ID, DATE_FORMAT(c.START_DATE,'%Y-%m') having RECORDS >=0
# order by MONTH asc,c.CAR_ID;

select MONTH(START_DATE) as MONTH, CAR_ID, count(*) as RECORDS
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
where CAR_ID in (
    SELECT
    CAR_ID
    from CAR_RENTAL_COMPANY_RENTAL_HISTORY c 
    WHERE (DATE_FORMAT(START_DATE, '%Y-%m') BETWEEN '2022-08' AND '2022-10')
    group by CAR_ID having count(*) >= 5) 
    and (DATE_FORMAT(START_DATE, '%Y-%m') BETWEEN '2022-08' AND '2022-10')
group by MONTH(START_DATE) , CAR_ID having RECORDS > 0
order by MONTH asc, CAR_ID desc;