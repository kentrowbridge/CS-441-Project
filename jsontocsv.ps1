#add extra column that includes if it's a green lane.
# SW Broadway 2009
# SW Moody 2011
# NE Cully Blvd. 2011
# NE Multnoma St. 2012

# Get text from json file
$jsonFilePath = $PSScriptRoot
$jsonFile = $jsonFilePath + "\portland_accidents.json"
$jsonText = Get-Content $jsonFile

# csv file
$csvFile = $jsonFilePath + "\portland_accidents.csv"

# Loop through the lines
$count = 0
foreach($line in $jsonText)
{
    #if($line -eq "{")
    #{
        
    #}
}
