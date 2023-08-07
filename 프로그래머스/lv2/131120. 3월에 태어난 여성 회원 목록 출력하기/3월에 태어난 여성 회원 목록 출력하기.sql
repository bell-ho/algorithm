-- 코드를 입력하세요
SELECT m.MEMBER_ID,m.MEMBER_NAME,m.GENDER,DATE_FORMAT(m.DATE_OF_BIRTH,'%Y-%m-%d') as DATE_OF_BIRTH from member_profile m where m.gender = 'W' and m.TLNO is not null and month(m.DATE_OF_BIRTH) = 3 order by m.MEMBER_ID asc;

