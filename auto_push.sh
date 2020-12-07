#!/bin/bash
file='package.json'
# 自動新增版本號
increment_version ()
{
  declare -a part=( ${1//\./ } )
  declare    new
  declare -i carry=1
 
  for (( CNTR=${#part[@]}-1; CNTR>=0; CNTR-=1 )); do
    #判斷位數
    len=4
    # 新數值+1
    new=$((part[CNTR]+carry))
    # echo "i:$CNTR 計算後:$new 進位:$carry "
    # 是否進位 if( 長度 > 指定的長度 )? carry=1 : carry=0 ;
    [ ${#new} -gt $len ] && carry=1 || carry=0
    # if( 進位時 && 不等於最左邊位元 )?  新數值=0 : 新數值=數值+1 
    [ ${#new} -gt $len ] && [ $CNTR -gt 0 ]  && new=0 || new=$new
    part[CNTR]=${new}
  done
  new="${part[*]}"
  newKey="  \"version\": \"$(echo -e "${new// /.}")\","
  echo "$newKey"
}

# v='9999.0.9999'
# increment_version $v

echo "=======START========"
oldVersion=$(sed -n "3p"  "$file" )
echo "舊版本:$oldVersion"
version=$(echo "${oldVersion:14}" | awk -F'",' '{print $1}')
newVersion=$(increment_version $version)
echo "新版本:$newVersion"
sed -i "s/$oldVersion/$newVersion/g" "$file"
npm publish
echo "=======END========"

# read -s -n1 -p "按任意键继续 ... " # 本機測試打開