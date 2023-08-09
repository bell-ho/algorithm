-- 코드를 입력하세요
SELECT 
ug.USER_ID, 
ug.NICKNAME, 
concat(ug.CITY," ",ug.STREET_ADDRESS1," ",ug.STREET_ADDRESS2) as 전체주소,
concat(SUBSTR(ug.TLNO, 1, 3), '-', SUBSTR(ug.TLNO, 4, 4), '-', SUBSTR(ug.TLNO, 8)) as 전화번호
from USED_GOODS_USER ug 
inner join USED_GOODS_BOARD ub on ug.USER_ID = ub.WRITER_ID
group by ub.WRITER_ID having count(*) >= 3
order by ug.USER_ID desc
;