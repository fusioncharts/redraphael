TEST_SOURCE_DIR=tests/benchmark;
TEST_SOURCE_PATTERN=*-spec.js;

for bench_file_path in $(find "${TEST_SOURCE_DIR}" -name "${TEST_SOURCE_PATTERN}"); do
    yb "${bench_file_path}" --phantom;
done