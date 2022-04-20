/*
 *  Quick Test: CLI for stress testing in competitive programming
 *  Copyright (C) 2021 - Luis Miguel Báez
 *  License: MIT (See the LICENSE file in the repository root directory)
 */

use structopt::StructOpt;

pub mod cli;
pub mod config;
pub mod constants;
pub mod diff;
pub mod error;
pub mod file_handler;
pub mod generator;
pub mod language;
pub mod painter;
pub mod runner;
pub mod subcommand;
pub mod util;

use crate::cli::Opt;

use exitfailure::ExitFailure;

fn main() -> Result<(), ExitFailure> {
    let opt = Opt::from_args();

    #[cfg(windows)]
    let _ = colored::control::set_virtual_terminal(true);

    match opt {
        Opt::TLE {
            target_file,
            gen_file,
            test_cases,
            timeout,
            break_bad,
            save_bad,
            save_all,
            run_all,
            run_ac,
            run_wa,
            run_tle,
            run_rte,
        } => subcommand::cmd_tle::run(
            target_file,
            gen_file,
            test_cases,
            timeout,
            break_bad,
            save_bad,
            save_all,
            run_all,
            run_ac,
            run_wa,
            run_tle,
            run_rte,
        ),
        Opt::Cmp {
            target_file,
            correct_file,
            gen_file,
            timeout,
            test_cases,
            break_bad,
            save_bad,
            save_all,
            run_all,
            run_ac,
            run_wa,
            run_tle,
            run_rte,
            diff,
        } => subcommand::cmd_cmp::run(
            target_file,
            correct_file,
            gen_file,
            timeout,
            test_cases,
            break_bad,
            save_bad,
            save_all,
            run_all,
            run_ac,
            run_wa,
            run_tle,
            run_rte,
            diff,
        ),
        Opt::Check {
            target_file,
            checker_file,
            gen_file,
            test_cases,
            timeout,
            break_bad,
            save_bad,
            save_all,
            run_all,
            run_ac,
            run_wa,
            run_tle,
            run_rte,
        } => subcommand::cmd_check::run(
            target_file,
            checker_file,
            gen_file,
            timeout,
            test_cases,
            break_bad,
            save_bad,
            save_all,
            run_all,
            run_ac,
            run_wa,
            run_tle,
            run_rte,
        ),
        Opt::Run {
            target_file,
            prefix,
            timeout,
            break_bad,
            save_out,
        } => subcommand::cmd_run::run(target_file, &prefix[..], timeout, break_bad, save_out),
        Opt::Setup { subcommand } => match subcommand {
            cli::SetUp::Config { label, value } => {
                subcommand::cmd_setup::run(&label[..], &value[..])
            }
        },
        Opt::Example { cmp, tle, check } => subcommand::cmd_example::run(cmp, tle, check),
    }
}
