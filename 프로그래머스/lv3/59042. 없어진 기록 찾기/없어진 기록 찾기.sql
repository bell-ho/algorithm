-- 코드를 입력하세요
SELECT ao.ANIMAL_ID, ao.NAME
from ANIMAL_OUTS ao
left join ANIMAL_INS  ai on ai.ANIMAL_ID = ao.ANIMAL_ID
where ai.ANIMAL_ID is null order by ao.ANIMAL_ID;