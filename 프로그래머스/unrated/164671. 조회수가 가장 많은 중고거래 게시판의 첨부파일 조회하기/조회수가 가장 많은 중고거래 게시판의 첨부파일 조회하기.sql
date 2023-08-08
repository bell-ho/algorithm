-- 코드를 입력하세요
SELECT concat("/home/grep/src/",ub.BOARD_ID,"/",uf.file_id,uf.file_name,uf.file_ext) as FILE_PATH
from USED_GOODS_BOARD ub inner join USED_GOODS_FILE uf on ub.BOARD_ID = uf.BOARD_ID
where ub.views = (select max(views) from USED_GOODS_BOARD)
order by uf.file_id desc;