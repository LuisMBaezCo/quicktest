/*
 *  Quick Test: CLI for stress testing in competitive programming
 *  Copyright (C) 2021  Luis Miguel Báez
 *  License: MIT (See the LICENSE file in the repository root directory)
 */

use std::path::PathBuf;
use structopt::clap::ArgGroup;
use structopt::StructOpt;

use crate::subcommand::cmd_setup::show_help_setup;

/*
/// Setup subcommand
#[derive(StructOpt, Debug)]
pub enum SetUp {
    /// Subcommand that allows to change C++ settings
    Cpp {
        /// Change the program argument of the compile command in C++
        #[structopt(long = "program", default_value = "")]
        program: String,

        /// Change the standard argument of the compile command in C++
        #[structopt(long = "standard", default_value = "")]
        standard: String,

        /// Change build command flags arguments in C++
        #[structopt(long = "flags", default_value = "")]
        flags: String,
    },
    /// Subcommand that allows to change python settings
    Python {
        /// Change the program argument of the run command in Python
        #[structopt(long = "program", default_value = "")]
        program: String,

        /// Change run command flags arguments in Python
        #[structopt(long = "flags", default_value = "")]
        flags: String,
    },
}
*/

/// Setup subcommand
#[derive(StructOpt, Debug)]
pub enum SetUp {
    /// Subcommand that allows to change settings
    #[structopt(after_help = show_help_setup())]
    Config {
        /// Label of the configuration to update
        #[structopt(
            short = "l",
            long = "label"
        )]
        label: String,

        /// Value of the configuration to update
        #[structopt(short = "v", long = "value")]
        value: String,
    },
}

/// CLI for stress testing in competitive programming contest
#[derive(StructOpt, Debug)]
#[structopt(name = "quicktest")]
pub enum Opt {
    /// Check TLE
    #[allow(clippy::upper_case_acronyms)]
    TLE {
        /// Target File
        #[structopt(short = "t", long = "target-file", parse(from_os_str))]
        target_file: PathBuf,

        /// Generator File
        #[structopt(short = "g", long = "gen-file", parse(from_os_str))]
        gen_file: PathBuf,

        /// Timeout
        #[structopt(long = "timeout", default_value = "2000")]
        timeout: u32,

        /// Number of test cases
        #[structopt(long = "test-cases", alias = "cases", default_value = "1000")]
        test_cases: u32,

        /// Break if TLE or RTE states occurs
        #[structopt(short = "b", alias = "break", long = "break-bad")]
        break_bad: bool,

        /// Save only bad cases with WA, TLE or RTE states
        #[structopt(long = "save-bad", conflicts_with = "save-all")]
        save_bad: bool,

        /// Save all test cases
        #[structopt(long = "save-all", conflicts_with = "save-bad")]
        save_all: bool,

        /// Run all test cases
        #[structopt(long = "run-all")]
        run_all: bool,

        /// Run test cases with Accepted status
        #[structopt(long = "run-ac")]
        run_ac: bool,

        /// Run test cases with Wrong Answer status
        #[structopt(long = "run-wa")]
        run_wa: bool,

        /// Run test cases with Time Limited Exceeded status
        #[structopt(long = "run-tle")]
        run_tle: bool,

        /// Run test cases with Runtime Error status
        #[structopt(long = "run-rte")]
        run_rte: bool,
    },
    /// Check the correctness of the <target-file> comparing it with <correct-file> with input test generated by <gen-file>
    Cmp {
        /// Target File
        #[structopt(short = "t", long = "target-file", parse(from_os_str))]
        target_file: PathBuf,

        /// Correct File
        #[structopt(short = "c", long = "correct-file", parse(from_os_str))]
        correct_file: PathBuf,

        /// Generator File
        #[structopt(short = "g", long = "gen-file", parse(from_os_str))]
        gen_file: PathBuf,

        /// Timeout
        #[structopt(long = "timeout", default_value = "2000")]
        timeout: u32,

        /// Number of test cases
        #[structopt(long = "test-cases", alias = "cases", default_value = "1000")]
        test_cases: u32,

        /// Break if WA, TLE or RTE states occurs
        #[structopt(short = "b", alias = "break", long = "break-bad")]
        break_bad: bool,

        /// Save only bad cases with WA, TLE or RTE states
        #[structopt(long = "save-bad", conflicts_with = "save-all")]
        save_bad: bool,

        /// Save all test cases
        #[structopt(long = "save-all", conflicts_with = "save-bad")]
        save_all: bool,

        /// Run all test cases
        #[structopt(long = "run-all")]
        run_all: bool,

        /// Run test cases with Accepted status
        #[structopt(long = "run-ac")]
        run_ac: bool,

        /// Run test cases with Wrong Answer status
        #[structopt(long = "run-wa")]
        run_wa: bool,

        /// Run test cases with Time Limited Exceeded status
        #[structopt(long = "run-tle")]
        run_tle: bool,

        /// Run test cases with Runtime Error status
        #[structopt(long = "run-rte")]
        run_rte: bool,

        /// Show differences between the expected file and the output file
        #[structopt(long = "diff")]
        diff: bool,
    },
    /// Check the correctness of the answer using a script <checker-file> (Special for cases that do not have a unique answer)
    Check {
        /// Target File
        #[structopt(short = "t", long = "target-file", parse(from_os_str))]
        target_file: PathBuf,

        /// Checker File
        #[structopt(short = "c", long = "checker-file", parse(from_os_str))]
        checker_file: PathBuf,

        /// Generator File
        #[structopt(short = "g", long = "gen-file", parse(from_os_str))]
        gen_file: PathBuf,

        /// Timeout
        #[structopt(long = "timeout", default_value = "2000")]
        timeout: u32,

        /// Number of test cases
        #[structopt(long = "test-cases", alias = "cases", default_value = "1000")]
        test_cases: u32,

        /// Break if WA, TLE or RTE states occurs
        #[structopt(short = "b", alias = "break", long = "break_bad")]
        break_bad: bool,

        /// Save only bad cases with WA, TLE or RTE states
        #[structopt(long = "save-bad", conflicts_with = "save-all")]
        save_bad: bool,

        /// Save all test cases
        #[structopt(long = "save-all", conflicts_with = "save-bad")]
        save_all: bool,

        /// Run all test cases
        #[structopt(long = "run-all")]
        run_all: bool,

        /// Run test cases with Accepted status
        #[structopt(long = "run-ac")]
        run_ac: bool,

        /// Run test cases with Wrong Answer status
        #[structopt(long = "run-wa")]
        run_wa: bool,

        /// Run test cases with Time Limited Exceeded status
        #[structopt(long = "run-tle")]
        run_tle: bool,

        /// Run test cases with Runtime Error status
        #[structopt(long = "run-rte")]
        run_rte: bool,
    },
    /// Run tescases
    Run {
        /// Target File
        #[structopt(short = "t", long = "target-file", parse(from_os_str))]
        target_file: PathBuf,

        /// Prefix File
        #[structopt(short = "p", long = "prefix")]
        prefix: String,

        /// Timeout
        #[structopt(long = "timeout", default_value = "2000")]
        timeout: u32,

        /// Break if TLE or RTE states occurs
        #[structopt(short = "b", alias = "break", long = "break-bad")]
        break_bad: bool,

        /// Save the output of the target file for each test case
        #[structopt(long = "save-out")]
        save_out: bool,
    },
    /// Setup Subcommand
    Setup {
        #[structopt(subcommand)]
        subcommand: SetUp,
    },
    /// Shows examples of the selected subcommand
    #[structopt(group = ArgGroup::with_name("cmd").required(true))]
    Example {
        /// Show examples of the tle subcommand
        #[structopt(long = "tle", group = "cmd")]
        tle: bool,

        /// Show examples of the cmp subcommand
        #[structopt(long = "cmp", group = "cmd")]
        cmp: bool,

        /// Show examples of the check subcommand
        #[structopt(long = "check", group = "cmd")]
        check: bool,
    },
}
