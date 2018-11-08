#! C:/xampp/perl/bin/perl

require 'jcode.pl';
require 'cgi-lib.pl';

&ReadParse;

# if($in{'name'} eq ''){
    # print "Content-type: text/html\n\n";
#     print "no name.\n"
#     print "Finish."
#     exit;
# }else{
    $datafile='../htdocs/data/history.csv';
    my ($sec, $min, $hour, $mday, $mon, $year) = localtime(time);
    $year += 1900;
    $mon += 1;
    my $nowstr = sprintf("%04d/%02d/%02d %02d:%02d:%02d", $year, $mon, $mday, $hour, $min, $sec);

    open(FH,">>$datafile");
    print FH "$nowstr,$in{'class'},$in{'name'},$in{'score'}\n";
    close(FH);

    print "Content-type: text/html\n\n";
    print "Finish.";
    exit;

# }
