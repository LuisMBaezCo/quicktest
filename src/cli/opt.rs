/*
 *  Quick Test: CLI for stress testing in competitive programming
 *  Copyright (C) 2021-present / Luis Miguel Báez
 *  License: MIT (See the LICENSE file in the repository root directory)
 */

use std::path::PathBuf;
use structopt::clap::ArgGroup;
use structopt::StructOpt;

use crate::controllers::cmd_setup::show_help_setup;

/// Setup subcommand
#[derive(StructOpt, Debug)]
pub enum SetUp {
    /// Subcommand that allows to change settings
    #[structopt(after_help = show_help_setup())]
    Config {
        /// Label of the configuration to update
        #[structopt(short = "l", long = "label")]
        label: String,

        /// Value of the configuration to update
        #[structopt(short = "v", long = "value")]
        value: String,
    },
    /// Subcommand that allows to reset settings
    Reset {},
}

/// CLI for stress testing in competitive programming contest
#[derive(StructOpt, Debug)]
#[structopt(name = "quicktest")]
pub enum Opt {
    /// Check TLE
    Stress {
        /// Target File
        #[structopt(short = "t", long = "target-file", parse(from_os_str))]
        target_file: PathBuf,

        /// Generator File
        #[structopt(short = "g", long = "gen-file", parse(from_os_str), default_value = "")]
        gen_file: PathBuf,

        /// Timeout (alias --tout)
        #[structopt(long = "timeout", alias = "tout", default_value = "2000")]
        timeout: u32,

        /// Memory Limit (alias --ml) 1GB
        #[structopt(long = "memory-limit", alias = "ml", default_value = "1000000000")]
        memory_limit: u64,

        /// Number of test cases (alias --tc)
        #[structopt(long = "test-cases", alias = "tc", default_value = "1000")]
        test_cases: u32,

        /// Prefix File
        #[structopt(short = "p", long = "prefix", default_value = "")]
        prefix: String,

        /// Break if TLE or RTE states occurs (Alias --break)
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

        /// Run test cases with MLE status
        #[structopt(long = "run-mle")]
        run_mle: bool,
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
        #[structopt(short = "g", long = "gen-file", parse(from_os_str), default_value = "")]
        gen_file: PathBuf,

        /// Timeout (Alias --tout)
        #[structopt(long = "timeout", alias = "tout", default_value = "2000")]
        timeout: u32,

        /// Memory Limit (alias --ml) 1GB
        #[structopt(long = "memory-limit", alias = "ml", default_value = "1000000000")]
        memory_limit: u64,

        /// Number of test cases (Alias --tc)
        #[structopt(long = "test-cases", alias = "tc", default_value = "1000")]
        test_cases: u32,

        /// Prefix File
        #[structopt(short = "p", long = "prefix", default_value = "")]
        prefix: String,

        /// Break if WA, TLE or RTE states occurs (Alias --break)
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

        /// Run test cases with Memory Limited Exceeded status
        #[structopt(long = "run-mle")]
        run_mle: bool,

        /// Run test cases with Runtime Error status
        #[structopt(long = "run-rte")]
        run_rte: bool,

        /// Show differences between the expected file and the output file
        #[structopt(short = "d", long = "diff")]
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
        #[structopt(short = "g", long = "gen-file", parse(from_os_str), default_value = "")]
        gen_file: PathBuf,

        /// Timeout (Alias --tout)
        #[structopt(long = "timeout", alias = "tout", default_value = "2000")]
        timeout: u32,

        /// Memory Limit (alias --ml) 1GB
        #[structopt(long = "memory-limit", alias = "ml", default_value = "1000000000")]
        memory_limit: u64,

        /// Number of test cases (Alias --tc)
        #[structopt(long = "test-cases", alias = "tc", default_value = "1000")]
        test_cases: u32,

        /// Prefix File
        #[structopt(short = "p", long = "prefix", default_value = "")]
        prefix: String,

        /// Break if WA, TLE or RTE states occurs (Alias --break)
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

        /// Run test cases with MLE status
        #[structopt(long = "run-mle")]
        run_mle: bool,
    },
    /// Run tescases and create an output file for each test case
    Output {
        /// Target File
        #[structopt(short = "t", long = "target-file", parse(from_os_str))]
        target_file: PathBuf,

        /// Prefix File
        #[structopt(short = "p", long = "prefix")]
        prefix: String,

        /// Timeout (Alias --tout)
        #[structopt(long = "timeout", alias = "tout", default_value = "2000")]
        timeout: u32,

        /// Memory Limit (alias --ml) 1GB
        #[structopt(long = "memory-limit", alias = "ml", default_value = "1000000000")]
        memory_limit: u64,

        /// Break if TLE or RTE states occurs (Alias --break)
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
        /// Show examples of the stress subcommand
        #[structopt(long = "stress", group = "cmd")]
        stress: bool,

        /// Show examples of the cmp subcommand
        #[structopt(long = "cmp", group = "cmd")]
        cmp: bool,

        /// Show examples of the check subcommand
        #[structopt(long = "check", group = "cmd")]
        check: bool,

        /// Show examples of the output subcommand
        #[structopt(long = "output", group = "cmd")]
        output: bool,

        /// Show examples of the setup subcommand
        #[structopt(long = "setup", group = "cmd")]
        setup: bool,
    },
}
