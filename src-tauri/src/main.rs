// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod file_operation;
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
   format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn get_username() -> String {
  return whoami::username();
}

#[tauri::command]
fn read_all_text(file: &str) -> String {
    let content = file_operation::read_all_text(file);
   format!("File content: {}",content)
}

#[tauri::command]
async fn open_webview(handle: tauri::AppHandle, url: String) {

  let js_code = r#"
  // JavaScript code to execute after the webview navigates
  console.log("Webview refreshed!");
"#;

  let new_window = tauri::WindowBuilder::new(&handle, "external",
    tauri::WindowUrl::External(url.parse().unwrap())
  ).build().unwrap();

  new_window.eval(&js_code).expect("Failed to run Tauri application");

}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet,read_all_text,open_webview,get_username])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}