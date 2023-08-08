-- 코드를 입력하세요
select * from places p where p.HOST_ID in (SELECT p.HOST_ID from places p group by p.HOST_ID having count(*) > 1);