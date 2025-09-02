
use std::fs::{File, OpenOptions, self};
use std::io::{ self, BufRead, BufReader, Write };
use std::path::{PathBuf, Path};
use rust_search::SearchBuilder;
use serde_json::{Map, Value};

#[allow(dead_code)]
pub fn read_lines(filename: &str) -> io::Lines<BufReader<File>> {
    let file: File = File::open(filename).unwrap(); 
    return io::BufReader::new(file).lines(); 
}

#[allow(dead_code)]
pub fn read_all_text(filename: &str) -> String{
    let content: String = fs::read_to_string(filename).unwrap();
    return content;
}

#[allow(dead_code)]
pub fn write_files(file_path: &str, file_content: &str) -> std::io::Result<()> {
    let path = PathBuf::from(file_path);
    let dir = path.parent().unwrap();

    if Path::new(dir).is_dir()==false {
        fs::create_dir_all(dir)?;
    }
       
    let mut f = OpenOptions::new().write(true).open(path)?;
    f.write_all(file_content.as_bytes())?;
    f.flush()?;

    Ok(())
}

#[allow(dead_code)]
pub fn get_test_steps(){
    let files = get_all_files("java");
    let mut steps = Vec::new();
    for file in  files {

        if let Ok(file) = File::open(file) {
            let reader = BufReader::new(file);
            for line in reader.lines() {
                if let Ok(mut line_content) = line  {
                    if line_content.starts_with("@QAFTestStep"){
                        line_content = line_content.replace("@QAFTestStep(description = \"", "");
                        line_content = line_content.replace("\")", "");
                        steps.push(Map::new().insert("testStep".to_owned(), Value::String(line_content)));
                    }                   
                }
            }
        }
    }

    serde_json::to_string(&steps).unwrap();
}

#[allow(dead_code)]
fn get_all_files(file_extension: &str) -> Vec<String> {
    let pom_file_location: &str = "C:\\Source\\dms_test_automation\\New_Automation";
    let files: Vec<String> = SearchBuilder::default()
    .location(pom_file_location)
    .ext(file_extension)
    .ignore_case()
    .hidden()
    .build()
    .collect();

    return files;
}


