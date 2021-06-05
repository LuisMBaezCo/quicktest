// reference: https://mattgathu.github.io/2017/10/01/testing-rust-cli-apps.html

static WITHOUT_ARGS_OUTPUT: &'static str = r#"
quicktest tle
Check that <target-file> does not have the TLE status using random test cases generated by <gen-file>

USAGE:
    $ quicktest tle --target-file "code/main.cpp" --gen-file "code/gen.cpp" --timeout=1000 --test-cases=100
FLAGS:
    -h, --help          Prints help information
    -s, --save-cases    Save test cases
    -b, --tle-break     TLE Break
    -V, --version       Prints version information

OPTIONS:
    -g, --gen-file <gen-file>          Generator File
    -t, --target-file <target-file>    Target File
    -n, --test-cases <test-cases>      Number of test cases [default: 10000]
    -o, --timeout <timeout>            Timeout TLE [default: 2000]
"#;

// #[cfg(test)]
mod tle_subcommand {
    use std::process::Command;
    use crate::cli::tle_subcommand::WITHOUT_ARGS_OUTPUT;

    #[cfg(unix)]
    #[test]
    fn help() {
        let output = Command::new("./target/debug/quicktest")
            .arg("tle")
            .arg("--help")
            .output()
            .expect("help in tle subcommand failed");
        
        assert_eq!(String::from_utf8_lossy(&output.stdout), WITHOUT_ARGS_OUTPUT);
    }
}