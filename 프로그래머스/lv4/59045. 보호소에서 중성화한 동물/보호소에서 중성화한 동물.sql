-- 코드를 입력하세요
select ao.ANIMAL_ID,ao.ANIMAL_TYPE,ao.NAME from ANIMAL_INS ai 
inner join ANIMAL_OUTS ao on ai.ANIMAL_ID = ao.ANIMAL_ID
where ai.SEX_UPON_INTAKE != ao.SEX_UPON_OUTCOME;