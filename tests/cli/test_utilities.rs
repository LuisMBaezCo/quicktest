use std::{io::Write, path::{Path, PathBuf}};

use crate::cli::test_constants::FOLDER;

pub fn create_files(target: &str, gen: &str,
        target_code: &str, gen_code: &str, new_folder: &str) -> Result<(), std::io::Error> {
    
    if !Path::new(FOLDER).exists() {
        std::fs::create_dir(FOLDER).expect(&format!("Unable to create {}", FOLDER));
    }
            
    let folder_path = &format!("{}/{}", FOLDER, new_folder)[..];
    
    if !Path::new(folder_path).exists() {
        std::fs::create_dir(folder_path).expect(&format!("Unable to create {}", folder_path));
    }
    
    let target_file = format!("{}/{}", folder_path, target);
    let gen_file = format!("{}/{}", folder_path, gen);

    let mut target_file = std::fs::File::create(PathBuf::from(target_file))?;
    target_file.write_all(target_code.as_bytes())?;

    let mut gen_file = std::fs::File::create(PathBuf::from(gen_file))?;
    gen_file.write_all(gen_code.as_bytes())?;
    Ok(())
}