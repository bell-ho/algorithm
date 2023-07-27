-- 코드를 입력하세요
SELECT ub.title,ub.BOARD_ID,ur.REPLY_ID,ur.WRITER_ID,ur.CONTENTS,DATE_FORMAT(ur.CREATED_DATE,'%Y-%m-%d') from USED_GOODS_BOARD ub 
inner join USED_GOODS_REPLY ur 
on ub.BOARD_ID = ur.BOARD_ID
where ub.CREATED_DATE between '2022-10-01 00:00:00' and '2022-10-31 23:59:59'
order by ur.CREATED_DATE asc, ub.title asc;
